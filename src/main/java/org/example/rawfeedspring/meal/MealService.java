package org.example.rawfeedspring.meal;

import org.example.rawfeedspring.database.FoodDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealService {
    @Autowired
    private MealRepository mealRepository;

    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    public Meal saveMeal(Meal meal) {
        return mealRepository.save(meal);
    }

    public void deleteMealById(Long mealId) {
        mealRepository.deleteById(mealId);
    }
}
