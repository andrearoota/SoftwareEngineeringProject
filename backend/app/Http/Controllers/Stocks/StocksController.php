<?php

namespace App\Http\Controllers\Stocks;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StocksController extends Controller
{
    /**
     * We establish this function in our controller class so that we can use the auth:api middleware
     * within it to block unauthenticated access to certain methods within the controller
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function RscriptCall()
   {
        $reading = shell_exec('Rscript EOD.R $Token');
   }
}


