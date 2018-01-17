package com.cg.cucumber.stepdefs;

import com.cg.SdsdApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = SdsdApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
