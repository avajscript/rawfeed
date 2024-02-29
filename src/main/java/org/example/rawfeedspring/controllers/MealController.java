package org.example.rawfeedspring.controllers;

import org.example.rawfeedspring.constants.AppConstants;
import org.example.rawfeedspring.meal.Meal;
import org.example.rawfeedspring.meal.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = AppConstants.BASE_URL_FRONTEND)
public class MealController {
    @Autowired
    private MealService mealService;

    @GetMapping("/meals")
    @ResponseBody
    public List<Meal> getAllMeals(Model model) {
        /*
        List<Meal> meals = mealService.getAllMeals();
        model.addAttribute("meals", meals);
        return "meals";
         */
        List<Meal> meals = mealService.getAllMeals();
        return meals;
    }

    @PostMapping("/meals")
    @ResponseBody
    public Meal saveMeal(@Validated @RequestBody Meal meal) {
        return mealService.saveMeal(meal);
    }


}
