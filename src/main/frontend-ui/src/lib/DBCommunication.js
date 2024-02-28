export class DBCommunication {
    static async getMeals() {
        let response;
        try {
            response = await fetch(process.env.REACT_APP_BASE_URL + "/meals", {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            // error fetching meals
            if (!response.ok) {
                console.log(response)
                console.log("Error fetching meals: " + response.statusText);
                return null;
            }
            // return the meals
            const meals = await response.json();
            return meals;
        } catch (error) {
            console.log("Error fetching meals");
            console.log(error);
            return null;
        }
    }
}