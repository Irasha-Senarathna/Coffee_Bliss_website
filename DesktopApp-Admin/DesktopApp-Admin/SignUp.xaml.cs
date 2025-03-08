using System;
using System.Windows;
using MySql.Data.MySqlClient;  // For MySQL support

namespace CoffeeShop
{
    public partial class SignUp : Window
    {
        public SignUp()
        {
            InitializeComponent();
        }
        private void SignInTextBlock_MouseLeftButtonDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            Login loginWindow = new Login();
            loginWindow.Show();
            this.Close();  // Close the signup window
        }


        private void SignUpButton_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameInput.Text.Trim();
            string email = EmailInput.Text.Trim();
            string password = PasswordInput.Password;
            string confirmPassword = ConfirmPasswordInput.Password;

            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(password))
            {
                MessageBox.Show("All fields are required.");
                return;
            }

            if (password != confirmPassword)
            {
                MessageBox.Show("Passwords do not match!");
                return;
            }

            string connectionString = "Server=localhost;Database=admin_db;Uid=root;Pwd=Isenarathne@2001";

            try
            {
                using (MySqlConnection connection = new MySqlConnection(connectionString))
                {
                    connection.Open();

                    // Check if username or email already exists
                    string checkQuery = "SELECT COUNT(*) FROM admin WHERE username = @Username OR email = @Email";
                    using (MySqlCommand checkCmd = new MySqlCommand(checkQuery, connection))
                    {
                        checkCmd.Parameters.AddWithValue("@Username", username);
                        checkCmd.Parameters.AddWithValue("@Email", email);

                        int exists = Convert.ToInt32(checkCmd.ExecuteScalar());

                        if (exists > 0)
                        {
                            MessageBox.Show("Username or Email already exists!");
                            return;
                        }
                    }

                    // Insert new user into `admin` table
                    string insertQuery = "INSERT INTO admin (username, email, password) VALUES (@Username, @Email, @Password)";
                    using (MySqlCommand cmd = new MySqlCommand(insertQuery, connection))
                    {
                        cmd.Parameters.AddWithValue("@Username", username);
                        cmd.Parameters.AddWithValue("@Email", email);
                        cmd.Parameters.AddWithValue("@Password", password);  // Note: Hash passwords in real apps!

                        cmd.ExecuteNonQuery();
                    }

                    MessageBox.Show("Sign-up successful!");

                    // Redirect to login
                    Login loginWindow = new Login();
                    loginWindow.Show();
                    this.Close();  // Close signup window
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show("Database error: " + ex.Message);
            }
        }
    }
}
