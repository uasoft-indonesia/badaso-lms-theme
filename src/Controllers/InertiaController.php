<?php

namespace Uasoft\Badaso\Theme\LMSTheme\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;

class InertiaController extends Controller
{
    public function home()
    {
        return Inertia::render('index', [], 'lms-theme::app');
    }

    public function joinCourse()
    {
        return Inertia::render('course/JoinCourse', [], 'lms-theme::app');
    }
}
