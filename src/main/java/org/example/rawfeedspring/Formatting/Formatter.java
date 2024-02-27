package org.example.rawfeedspring.Formatting;

import org.example.rawfeedspring.meal.Food;

import java.io.IOException;

public interface Formatter {
    public String formatFood(Food food) throws IOException;
}
