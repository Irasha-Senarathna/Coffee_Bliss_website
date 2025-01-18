using System;
using System.Windows;

namespace CoffeeShop
{
    public partial class Login : Window
    {
        public Login()
        {
            try
            {
                InitializeComponent();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message, "Error");
            }
        }

        // Event handler for the Login button click
        private void LoginButton_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameInput.Text.Trim();
            string password = PasswordInput.Password;

            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                ErrorMessage.Text = "Username or Password cannot be empty.";
                return;
            }

            // Example login validation (replace with your authentication logic)
            if (username == "admin" && password == "password")
            {
                ErrorMessage.Text = string.Empty;

                // Navigate to MainWindow
                MainWindow mainWindow = new MainWindow();
                mainWindow.Show();

                // Close the Login window
                this.Close();
            }
            else
            {
                ErrorMessage.Text = "Invalid Username or Password.";
            }
        }

        // Event handler for "Show Password" checkbox checked
        private void ShowPassword_Checked(object sender, RoutedEventArgs e)
        {
            // Display the password as plain text in the TextBox
            VisiblePasswordInput.Text = PasswordInput.Password;
            VisiblePasswordInput.Visibility = Visibility.Visible;
            PasswordInput.Visibility = Visibility.Collapsed;
        }

        // Event handler for "Show Password" checkbox unchecked
        private void ShowPassword_Unchecked(object sender, RoutedEventArgs e)
        {
            // Hide the plain text password and revert to the PasswordBox
            PasswordInput.Password = VisiblePasswordInput.Text;
            VisiblePasswordInput.Visibility = Visibility.Collapsed;
            PasswordInput.Visibility = Visibility.Visible;
        }
    }
}
