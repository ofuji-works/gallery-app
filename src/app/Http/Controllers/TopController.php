<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Weidner\Goutte\GoutteFacade as GoutteFacade;

class TopController extends Controller
{
    public function index() {
        $goutte = GoutteFacade::request('GET', 'https://paypaymall.yahoo.co.jp/store/zozo/top/');

        $image = [];
        $goutte->filter("#main > div.Column.Column-type1 > div.Column_main > div.Partition.store_storeRecommend.Partition-separate > div")
            ->each(function ($node) use (&$image){

                $image[] = $node->attr('src');
            });

            $params = [
                'image' => $image
            ];
            
        return view('index', $params);
    }

}
