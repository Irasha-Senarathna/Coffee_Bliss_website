using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;

namespace CoffeeShop
{
    public partial class OrderManagementPage : Window
    {
        // Constructor
        public OrderManagementPage()
        {
            InitializeComponent();
            LoadOrders();
        }

        // Sample Order Class
        public class Order
        {
            public string OrderID { get; set; }
            public string CustomerName { get; set; }
            public string Items { get; set; }
            public decimal TotalPrice { get; set; }
            public string Status { get; set; }
        }

        // Mock Data: Load Orders into the ListView
        private void LoadOrders()
        {
            List<Order> orders = new List<Order>
            {
                new Order { OrderID = "001", CustomerName = "John Doe", Items = "Espresso, Latte", TotalPrice = 10.50m, Status = "Pending" },
                new Order { OrderID = "002", CustomerName = "Jane Smith", Items = "Cappuccino, Mocha", TotalPrice = 15.00m, Status = "Completed" },
                new Order { OrderID = "003", CustomerName = "Alice Brown", Items = "Latte", TotalPrice = 5.00m, Status = "Pending" },
            };

            OrdersListView.ItemsSource = orders;
        }

        // Update Order Status Logic
        private void UpdateOrderStatus(object sender, RoutedEventArgs e)
        {
            string orderId = OrderIDInput.Text;
            string selectedStatus = (OrderStatusComboBox.SelectedItem as ComboBoxItem)?.Content?.ToString();

            if (string.IsNullOrWhiteSpace(orderId) || string.IsNullOrWhiteSpace(selectedStatus))
            {
                MessageBox.Show("Please enter a valid Order ID and select a status.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            bool orderFound = false;

            // Loop through the ListView items to find the matching order
            foreach (Order order in OrdersListView.Items)
            {
                if (order.OrderID == orderId)
                {
                    order.Status = selectedStatus;
                    orderFound = true;
                    break;
                }
            }

            if (orderFound)
            {
                OrdersListView.Items.Refresh(); // Refresh the ListView to update the status
                MessageBox.Show($"Order {orderId} status updated to {selectedStatus}.", "Success", MessageBoxButton.OK, MessageBoxImage.Information);
            }
            else
            {
                MessageBox.Show($"Order with ID {orderId} not found.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }

            // Clear input fields
            OrderIDInput.Text = string.Empty;
            OrderStatusComboBox.SelectedItem = null;
        }

        // Navigation Handlers (Examples)
        private void NavigateToMenuManagement(object sender, RoutedEventArgs e)
        {
            // Navigate to Menu Management Page (implement the logic if needed)
            MessageBox.Show("Navigating to Manage Menu.");
        }

        private void NavigateToOrderManagement(object sender, RoutedEventArgs e)
        {
            // Current Page (optional)
            MessageBox.Show("You are already on the Manage Orders page.");
        }

        private void NavigateToCustomerManagement(object sender, RoutedEventArgs e)
        {
            // Navigate to Customer Management Page (implement the logic if needed)
            MessageBox.Show("Navigating to Manage Customers.");
        }

        private void Logout(object sender, RoutedEventArgs e)
        {
            // Implement logout logic
            MessageBox.Show("Logging out...");
            this.Close();
        }
    }
}
