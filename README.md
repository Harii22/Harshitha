### **Restaurant Reservation System - Project Description**  

The **Restaurant Reservation System** is a web-based application that enables customers to book tables efficiently while dynamically managing available seating.  

#### **Key Features:**  
1. **Table Booking:** Customers can reserve tables by entering their name, phone number, and guest count.  
2. **Seats Management:** The system updates the "Seats Left" based on reservations, ensuring that it never goes negative or exceeds the total capacity.  
3. **Reservation Table:** Booked reservations are displayed in a table with columns for customer name, phone number, check-in time, checkout status, and a delete option.  
4. **Check-Out System:** When a customer clicks "Click to Checkout," their checkout time is recorded, and available seats are adjusted accordingly.  
5. **Reservation Deletion:** Users can delete reservations, and the system will update available seats based on whether the customer has checked out.  
6. **Overbooking Prevention:** If the requested guest count exceeds the available seats, an alert notifies the user, preventing overbooking.  
7. **Duplicate Entry Handling:** The system can handle duplicate customer names optionally, displaying an alert if necessary.  
8. **Dynamic UI Updates:** State management ensures real-time updates to the reservation table and seat availability without requiring a page refresh.  
9. **Frontend-Only Implementation:** This project is strictly frontend-based, with no backend or database integration.  
10. **Practical Learning:** The project covers key concepts such as form handling, state management, conditional rendering, and table manipulation in React.  

This system ensures smooth reservations while dynamically managing seating availability, offering an intuitive and efficient experience for restaurant staff and customers.
