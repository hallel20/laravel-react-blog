<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::resource('/posts', PostController::class);

Route::get('/admin', function() {
    return Inertia::render('Admin/Home');
})->middleware(['auth', 'verified'])->name('AdminHomePage');

Route::get('admin/new-post', function() {
    return Inertia::render('Admin/CreatePost');
})->middleware(['auth', 'verified'])->name('AdminCreatePost');

Route::get('/admin/posts', function(){
    // 'posts' => Post::all();
    return Inertia::render('Admin/AllPosts');
})->middleware(['auth', 'verified'])->name('AdminPostTable');

Route::get('admin/categories', function() {
    $user = Auth::user();
    if ($user->admin === false) {
        return Inertia::location('/');
    } else return Inertia::render('Admin/Categories');
})->middleware(['auth', 'verified'])->name('AdminCategories');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
