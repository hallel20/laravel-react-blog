<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\Category;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        // 'popularPosts' => Post::has('comments', '>=', 3)->get(),
        'recentPosts' => Post::latest()->paginate(3)
    ]);
})->name('home');

Route::resource('posts', PostController::class);

Route::resource('comments', CommentController::class);

Route::resource('/categories', CategoryController::class);

Route::get('/about-us', function() {
    return Inertia::render('About');
});

Route::get('/contact-us', function() {
    return Inertia::render('Contact');
});

Route::middleware('auth', 'CheckAdmin')->group(function () {
    Route::get('/admin', function() {
        return Inertia::render('Admin/Home', [
            //
            'latest_posts' => Post::latest()->paginate(5)
        ]);
    })->name('admin');
    
    Route::get('admin/new-post', function() {
        return Inertia::render('Admin/CreatePost', [
            'categories' => Category::all()
        ]);
    })->name('admin.new-post');
    
    Route::get('/admin/posts', function(){
        // 'posts' => Post::all();
        return Inertia::render('Admin/AllPosts', [
            'posts' => Post::with('category')->paginate(5)
        ]);
    })->name('admin.posts');

    Route::get('admin/posts/edit/{id}', function($id) {
        return Inertia::render('Admin/EditPost', [
            'post' => Post::get()->where('id', $id)
        ]);
    });
    
    Route::get('admin/categories', function() {
        return Inertia::render('Admin/Categories', [
            'categories' => Category::all()
        ]);
    })->name('admin.categories');
    
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
