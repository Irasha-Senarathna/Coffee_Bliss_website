using System;
using System.Windows;

namespace CoffeeShop
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        // Navigate to the Menu Management page
        private void NavigateToMenuManagement(object sender, RoutedEventArgs e)
        {
            // Open the Menu Management window or navigate to the respective page
            MessageBox.Show("Navigating to Manage Menu...");
        }

        // Navigate to the Order Management page
        private void NavigateToOrderManagement(object sender, RoutedEventArgs e)
        {
            // Open the Order Management window or navigate to the respective page
            MessageBox.Show("Navigating to Manage Orders...");
        }

        // Navigate to the Customer Management page
        private void NavigateToCustomerManagement(object sender, RoutedEventArgs e)
        {
            // Open the Customer Management window or navigate to the respective page
            MessageBox.Show("Navigating to Manage Customers...");
        }

        // Logout the user and return to the login page
        private void Logout(object sender, RoutedEventArgs e)
        {
            // Close the current window and open the Login window
            this.Close();
            Login loginWindow = new Login();
            loginWindow.Show();
        }
    }
}
