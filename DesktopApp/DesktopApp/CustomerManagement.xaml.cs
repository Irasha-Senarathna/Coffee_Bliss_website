using System.Windows;
using System.Windows.Controls;

namespace CoffeeShop
{
    public partial class CustomerManagement : Window
    {
        public CustomerManagement()
        {
            InitializeComponent();
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
            // Add customer logic here
        }
    }
}
