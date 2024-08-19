# Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Amon1700/Card-Assignment
   cd Card-Assignment
   ```

2. **Frontend:**
   - cd into `Frontend` folder.
   - run `npm install` command.
   - then run `npm run dev` command.

3. **Backend:**
   - cd into `Backend` folder.
   - run `npm install` command.
   - then run `npm run dev` command.

4. **To Add Card:**
    ### HTTP Method
    **POST**

    ### Endpoint
    `http://localhost:4000/card`

    ### Request Headers
    - **Content-Type:** `application/json`
    
    ### Request Body
    The request body should be in JSON format and include the following fields:

    ```json
    {
        "title": "Manage Your Account",
        "description": "Easily update your personal information, change your password, and manage your preferences to enhance your experience"
    }
