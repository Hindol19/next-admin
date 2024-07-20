from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    # Adjust this to the specific origins you want to allow
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = {
    "sales": [
        {
            "date": "2024-07-13",
            "total_sales": 1500,
            "number_of_orders": 50,
            "average_order_value": 30,
            "items_sold": [
                {"item_id": 1, "item_name": "Laptop",
                 "quantity": 5, "total_price": 500},
                {"item_id": 2, "item_name": "Headphones",
                    "quantity": 10, "total_price": 200},
                {"item_id": 3, "item_name": "Keyboard",
                    "quantity": 15, "total_price": 300},
                {"item_id": 4, "item_name": "Mouse",
                 "quantity": 20, "total_price": 200},
                {"item_id": 5, "item_name": "Monitor",
                 "quantity": 2, "total_price": 300}
            ]
        },
        {
            "date": "2024-07-14",
            "total_sales": 1750,
            "number_of_orders": 55,
            "average_order_value": 31.82,
            "items_sold": [
                {"item_id": 1, "item_name": "Laptop",
                 "quantity": 4, "total_price": 400},
                {"item_id": 2, "item_name": "Headphones",
                    "quantity": 12, "total_price": 240},
                {"item_id": 3, "item_name": "Keyboard",
                    "quantity": 18, "total_price": 360},
                {"item_id": 4, "item_name": "Mouse",
                 "quantity": 16, "total_price": 160},
                {"item_id": 5, "item_name": "Monitor",
                 "quantity": 3, "total_price": 450},
                {"item_id": 6, "item_name": "Webcam",
                 "quantity": 2, "total_price": 140}
            ]
        },
        {
            "date": "2024-07-15",
            "total_sales": 1600,
            "number_of_orders": 52,
            "average_order_value": 30.77,
            "items_sold": [
                {"item_id": 1, "item_name": "Laptop",
                 "quantity": 3, "total_price": 300},
                {"item_id": 2, "item_name": "Headphones",
                    "quantity": 8, "total_price": 160},
                {"item_id": 3, "item_name": "Keyboard",
                    "quantity": 20, "total_price": 400},
                {"item_id": 4, "item_name": "Mouse",
                 "quantity": 12, "total_price": 120},
                {"item_id": 5, "item_name": "Monitor",
                 "quantity": 5, "total_price": 750},
                {"item_id": 6, "item_name": "Webcam",
                 "quantity": 4, "total_price": 240}
            ]
        },
        {
            "date": "2024-07-16",
            "total_sales": 1900,
            "number_of_orders": 60,
            "average_order_value": 31.67,
            "items_sold": [
                {"item_id": 1, "item_name": "Laptop",
                 "quantity": 6, "total_price": 600},
                {"item_id": 2, "item_name": "Headphones",
                    "quantity": 15, "total_price": 300},
                {"item_id": 3, "item_name": "Keyboard",
                    "quantity": 10, "total_price": 200},
                {"item_id": 4, "item_name": "Mouse",
                 "quantity": 18, "total_price": 180},
                {"item_id": 5, "item_name": "Monitor",
                 "quantity": 7, "total_price": 1050},
                {"item_id": 6, "item_name": "Webcam",
                 "quantity": 4, "total_price": 240}
            ]
        },
        {
            "date": "2024-07-17",
            "total_sales": 2100,
            "number_of_orders": 65,
            "average_order_value": 32.31,
            "items_sold": [
                {"item_id": 1, "item_name": "Laptop",
                 "quantity": 7, "total_price": 700},
                {"item_id": 2, "item_name": "Headphones",
                    "quantity": 14, "total_price": 280},
                {"item_id": 3, "item_name": "Keyboard",
                    "quantity": 12, "total_price": 240},
                {"item_id": 4, "item_name": "Mouse",
                 "quantity": 20, "total_price": 200},
                {"item_id": 5, "item_name": "Monitor",
                 "quantity": 5, "total_price": 750},
                {"item_id": 6, "item_name": "Webcam",
                 "quantity": 7, "total_price": 490}
            ]
        },
        {
            "date": "2024-07-18",
            "total_sales": 2200,
            "number_of_orders": 70,
            "average_order_value": 31.43,
            "items_sold": [
                {"item_id": 1, "item_name": "Laptop",
                 "quantity": 8, "total_price": 800},
                {"item_id": 2, "item_name": "Headphones",
                    "quantity": 18, "total_price": 360},
                {"item_id": 3, "item_name": "Keyboard",
                    "quantity": 15, "total_price": 300},
                {"item_id": 4, "item_name": "Mouse",
                 "quantity": 16, "total_price": 160},
                {"item_id": 5, "item_name": "Monitor",
                 "quantity": 6, "total_price": 900},
                {"item_id": 6, "item_name": "Webcam",
                 "quantity": 7, "total_price": 490}
            ]
        },
        {
            "date": "2024-07-19",
            "total_sales": 2300,
            "number_of_orders": 75,
            "average_order_value": 30.67,
            "items_sold": [
                {"item_id": 1, "item_name": "Laptop",
                 "quantity": 9, "total_price": 900},
                {"item_id": 2, "item_name": "Headphones",
                    "quantity": 20, "total_price": 400},
                {"item_id": 3, "item_name": "Keyboard",
                    "quantity": 18, "total_price": 360},
                {"item_id": 4, "item_name": "Mouse",
                 "quantity": 15, "total_price": 150},
                {"item_id": 5, "item_name": "Monitor",
                 "quantity": 5, "total_price": 750},
                {"item_id": 6, "item_name": "Webcam",
                 "quantity": 8, "total_price": 560}
            ]
        }
    ]
}


@app.get("/")
def index():
    return {"message": "Hello World"}


@app.get("/get_data")
def get_data():
    return data


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
