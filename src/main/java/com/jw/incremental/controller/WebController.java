package com.jw.incremental.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/web")
    public String web() {
        return "index";
    }

    @GetMapping("/web/doggi")
    public String web2() {
       return "doggiverse";
    }
}
