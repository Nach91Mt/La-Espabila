from app import create_app
from dotenv import load_dotenv

load_dotenv()
app = create_app()

import os

if __name__ == "__main__":
    
    app.run(debug=True)