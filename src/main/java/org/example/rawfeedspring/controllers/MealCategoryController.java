package org.example.rawfeedspring.controllers;

import org.example.rawfeedspring.constants.AppConstants;
import org.example.rawfeedspring.meal.MealCategory;
import org.example.rawfeedspring.meal.MealCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin(origins = AppConstants.BASE_URL_FRONTEND)
public class MealCategoryController {
    @Autowired
    private MealCategoryService mealCategoryService;

    @PostMapping("/mealCategories")
    @ResponseBody
    public MealCategory saveMealCategory(@Validated @RequestBody MealCategory mealCategory) {
        return mealCategoryService.saveMealCategory(mealCategory);
    }

    @GetMapping("/mealCategories")
    @ResponseBody
    public List<MealCategory> getAllMealCategories() {
        return mealCategoryService.getAllMealCategories();
    }
}
