package org.example.rawfeedspring.Formatting;

import org.example.rawfeedspring.meal.Food;

import java.io.IOException;

public class TextFormatter implements Formatter{
    @Override
    public String formatFood(Food food) throws IOException {
        return food.toString();
    }
}
