using System.Collections.ObjectModel;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;

public class Customer
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public string? ContactNumber { get; set; }
}

namespace CoffeeShop
{
    public partial class CustomerManagementPage : Window
    {
        // ObservableCollection to hold customer data
        private ObservableCollection<Customer> customers;

        public CustomerManagementPage()
        {
            InitializeComponent();
            customers = new ObservableCollection<Customer>();
            CustomerListView.ItemsSource = customers;
        }

        private void RemovePlaceholderText(object sender, RoutedEventArgs e)
        {
            TextBox textBox = sender as TextBox;
            if (textBox != null && (textBox.Text == "Enter Customer Name" || textBox.Text == "Enter Email"))
            {
                textBox.Text = string.Empty;
            }
        }

        private void AddPlaceholderText(object sender, RoutedEventArgs e)
        {
            TextBox textBox = sender as TextBox;
            if (textBox != null && string.IsNullOrWhiteSpace(textBox.Text))
            {
                if (textBox.Name == "CustomerNameInput")
                {
                    textBox.Text = "Enter Customer Name";
                }
                else if (textBox.Name == "CustomerEmailInput")
                {
                    textBox.Text = "Enter Email";
                }
            }
        }

        private void AddCustomer(object sender, RoutedEventArgs e)
        {
            string name = CustomerNameInput.Text;
            string email = CustomerEmailInput.Text;
            string contactNumber = CustomerContactInput.Text;

            if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(contactNumber))
            {
                MessageBox.Show("Please fill in all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            customers.Add(new Customer
            {
                Name = name,
                Email = email,
                ContactNumber = contactNumber
            });

            ClearInputs();
        }

        private void EditCustomer(object sender, RoutedEventArgs e)
        {
            if (CustomerListView.SelectedItem is Customer selectedCustomer)
            {
                string name = CustomerNameInput.Text;
                string email = CustomerEmailInput.Text;
                string contactNumber = CustomerContactInput.Text;

                if (string.IsNullOrWhiteSpace(name) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(contactNumber))
                {
                    MessageBox.Show("Please fill in all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                    return;
                }

                selectedCustomer.Name = name;
                selectedCustomer.Email = email;
                selectedCustomer.ContactNumber = contactNumber;

                // Refresh the ListView
                CustomerListView.Items.Refresh();
                ClearInputs();
            }
            else
            {
                MessageBox.Show("Please select a customer to edit.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        private void DeleteCustomer(object sender, RoutedEventArgs e)
        {
            if (CustomerListView.SelectedItem is Customer selectedCustomer)
            {
                customers.Remove(selectedCustomer);
                ClearInputs();
            }
            else
            {
                MessageBox.Show("Please select a customer to delete.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        private void ClearInputs()
        {
            CustomerNameInput.Text = "Enter Customer Name";
            CustomerEmailInput.Text = "Enter Email";
            CustomerContactInput.Clear();
        }

        private void NavigateToDashboard(object sender, RoutedEventArgs e)
        {
            MainWindow dashboardWindow = new MainWindow();
            dashboardWindow.Show();
            this.Close();
        }

        private void NavigateToMenuManagement(object sender, RoutedEventArgs e)
        {
            MenuPage menuManagementWindow = new MenuPage();
            menuManagementWindow.Show();
            this.Close();
        }

        private void NavigateToOrderManagement(object sender, RoutedEventArgs e)
        {
            OrderManagementPage orderManagementWindow = new OrderManagementPage();
            orderManagementWindow.Show();
            this.Close();
        }

        private void NavigateToCustomerManagement(object sender, RoutedEventArgs e)
        {
            CustomerManagementPage customerManagementWindow = new CustomerManagementPage();
            customerManagementWindow.Show();
            this.Close();
        }

        private void Logout(object sender, RoutedEventArgs e)
        {
            this.Close();
            Login loginWindow = new Login();
            loginWindow.Show();
        }
    }
}
