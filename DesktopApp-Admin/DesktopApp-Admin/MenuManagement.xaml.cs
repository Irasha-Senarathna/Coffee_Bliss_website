using MySql.Data.MySqlClient;
using System.Collections.ObjectModel;
using System.Windows;

namespace CoffeeShop
{
    public partial class MenuPage : Window
    {
        public ObservableCollection<MenuItem> MenuItems { get; set; }
        public ObservableCollection<string> Categories { get; set; }

        public MenuPage()
        {
            InitializeComponent();

            MenuItems = new ObservableCollection<MenuItem>();
            Categories = new ObservableCollection<string> { "Espresso", "Cappuccino", "Latte", "Mocha" };

            MenuItemsList.ItemsSource = MenuItems;
            MenuItemCategory.ItemsSource = Categories;

            LoadMenuItems();  // Load menu items when the page is opened
        }

        private void AddMenuItem(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(MenuItemName.Text) ||
                MenuItemCategory.SelectedItem == null ||
                string.IsNullOrWhiteSpace(MenuItemPrice.Text) ||
                !decimal.TryParse(MenuItemPrice.Text, out decimal price))
            {
                MessageBox.Show("Please provide valid input in all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Adding to the database
            using (var connection = new MySqlConnection(connectionString))
            {
                connection.Open();
                var query = "INSERT INTO menu (name, category, price) VALUES (@name, @category, @price)";
                using (var cmd = new MySqlCommand(query, connection))
                {
                    cmd.Parameters.AddWithValue("@name", MenuItemName.Text);
                    cmd.Parameters.AddWithValue("@category", MenuItemCategory.SelectedItem.ToString());
                    cmd.Parameters.AddWithValue("@price", price);
                    cmd.ExecuteNonQuery();
                }
            }

            // Adding to the local list (for immediate UI update or in-memory usage)
            MenuItems.Add(new MenuItem
            {
                Name = MenuItemName.Text,
                Category = MenuItemCategory.SelectedItem.ToString(),
                Price = price
            });

            // Reloading the items and clearing inputs
            LoadMenuItems();  // Reload the items after adding
            ClearInputs();
        }

        private void DeleteMenuItem(object sender, RoutedEventArgs e)
        {
            if (MenuItemsList.SelectedItem is MenuItem selectedItem)
            {
                // Deleting from the database
                using (var connection = new MySqlConnection(connectionString))
                {
                    connection.Open();
                    var query = "DELETE FROM menu WHERE id = @itemId";
                    using (var cmd = new MySqlCommand(query, connection))
                    {
                        cmd.Parameters.AddWithValue("@itemId", selectedItem.Id);
                        cmd.ExecuteNonQuery();
                    }
                }

                // Removing from the local list (for UI update)
                MenuItems.Remove(selectedItem);

                // Reloading the items and updating the UI
                LoadMenuItems();  // Reload the items after deletion
            }
            else
            {
                MessageBox.Show("Please select an item to delete.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        private void UpdateMenuItem(object sender, RoutedEventArgs e)
        {
            if (MenuItemsList.SelectedItem is MenuItem selectedItem &&
                !string.IsNullOrWhiteSpace(MenuItemName.Text) &&
                MenuItemCategory.SelectedItem != null &&
                decimal.TryParse(MenuItemPrice.Text, out decimal price))
            {
                // Updating the database
                using (var connection = new MySqlConnection(connectionString))
                {
                    connection.Open();
                    var query = "UPDATE menu SET name = @name, category = @category, price = @price WHERE id = @itemId";
                    using (var cmd = new MySqlCommand(query, connection))
                    {
                        cmd.Parameters.AddWithValue("@name", MenuItemName.Text);
                        cmd.Parameters.AddWithValue("@category", MenuItemCategory.SelectedItem.ToString());
                        cmd.Parameters.AddWithValue("@price", price);
                        cmd.Parameters.AddWithValue("@itemId", selectedItem.Id);
                        cmd.ExecuteNonQuery();
                    }
                }

                // Updating the local list
                selectedItem.Name = MenuItemName.Text;
                selectedItem.Category = MenuItemCategory.SelectedItem.ToString();
                selectedItem.Price = price;

                // Refreshing the list on the UI
                MenuItemsList.Items.Refresh();

                // Reloading items in case any other updates are required
                LoadMenuItems();
            }
            else
            {
                MessageBox.Show("Please select an item and provide valid input.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        private void LoadMenuItems()
        {
            MenuItems.Clear();  // Clear existing items
            using (var connection = new MySqlConnection(connectionString))
            {
                connection.Open();
                var query = "SELECT * FROM menu";
                using (var cmd = new MySqlCommand(query, connection))
                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        MenuItems.Add(new MenuItem
                        {
                            Id = reader.GetInt32("id"),
                            Name = reader.GetString("name"),
                            Category = reader.GetString("category"),
                            Price = reader.GetDecimal("price")
                        });
                    }
                }
            }
        }

        private void ClearMenuItem(object sender, RoutedEventArgs e) => ClearInputs();

        private void ClearInputs()
        {
            MenuItemName.Text = string.Empty;
            MenuItemCategory.SelectedItem = null;
            MenuItemPrice.Text = string.Empty;
        }

        private void NavigateToDashboard(object sender, RoutedEventArgs e)
        {
            new MainWindow().Show();
            Close();
        }

        private void NavigateToMenuManagement(object sender, RoutedEventArgs e)
        {
            new MenuPage().Show();
            Close();
        }

        private void NavigateToOrderManagement(object sender, RoutedEventArgs e)
        {
            new OrderManagementPage().Show();
            Close();
        }

        private void NavigateToCustomerManagement(object sender, RoutedEventArgs e)
        {
            new CustomerManagementPage().Show();
            Close();
        }

        private void Logout(object sender, RoutedEventArgs e)
        {
            new Login().Show();
            Close();
        }

        string connectionString = "Server=localhost;Database=admin_db;Uid=root;Pwd=Isenarathne@2001";
    }

    public class MenuItem
    {
        public int Id { get; set; }  // Unique ID for each item (Primary Key)
        public string? Name { get; set; }
        public string? Category { get; set; }
        public decimal Price { get; set; }
    }
}
