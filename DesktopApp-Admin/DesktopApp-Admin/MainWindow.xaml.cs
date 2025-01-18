using System;
using System.Windows;
using System.Windows.Controls.Primitives;

namespace CoffeeShop
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void NavigateToDashboard(object sender, RoutedEventArgs e)
        {
            MainWindow dashboardWindow = new MainWindow();
            dashboardWindow.Show();
            this.Close();
        }

        // Navigate to the Menu Management page
        private void NavigateToMenuManagement(object sender, RoutedEventArgs e)
        {
            MenuPage menuManagementWindow = new MenuPage();
            menuManagementWindow.Show();
            this.Close();
        }

        // Navigate to the Order Management page
        private void NavigateToOrderManagement(object sender, RoutedEventArgs e)
        {
            OrderManagementPage orderManagementWindow = new OrderManagementPage();
            orderManagementWindow.Show();
            this.Close();
        }


        // Navigate to the Customer Management page
        private void NavigateToCustomerManagement(object sender, RoutedEventArgs e)
        {
            CustomerManagementPage customerManagementWindow = new CustomerManagementPage();
            customerManagementWindow.Show();
            this.Close();
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
