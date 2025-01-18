using System.Collections.ObjectModel;
using System.Windows;
using System.Windows.Controls;

namespace CoffeeShop
{
    public partial class MenuPage : Window
    {
        // ObservableCollection to hold menu items
        public ObservableCollection<MenuItem> MenuItems { get; set; }

        public MenuPage()
        {
            InitializeComponent();

            // Initialize the collection and set it as the data source for the ListView
            MenuItems = new ObservableCollection<MenuItem>();
            MenuItemsList.ItemsSource = MenuItems;
        }

        // Event handler for adding a new menu item
        private void AddMenuItem(object sender, RoutedEventArgs e)
        {
            // Validate inputs
            if (string.IsNullOrWhiteSpace(MenuItemName.Text) || string.IsNullOrWhiteSpace(MenuItemCategory.Text) || string.IsNullOrWhiteSpace(MenuItemPrice.Text))
            {
                MessageBox.Show("Please fill in all fields.", "Input Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            if (!decimal.TryParse(MenuItemPrice.Text, out decimal price))
            {
                MessageBox.Show("Invalid price. Please enter a numeric value.", "Input Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            // Add the new menu item to the collection
            MenuItems.Add(new MenuItem
            {
                Name = MenuItemName.Text,
                Category = MenuItemCategory.Text,
                Price = price
            });

            // Clear input fields
            ClearInputs();
        }

        // Event handler for deleting a selected menu item
        private void DeleteMenuItem(object sender, RoutedEventArgs e)
        {
            if (MenuItemsList.SelectedItem is MenuItem selectedItem)
            {
                MenuItems.Remove(selectedItem);
            }
            else
            {
                MessageBox.Show("Please select a menu item to delete.", "Delete Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        // Event handler for updating a selected menu item
        private void UpdateMenuItem(object sender, RoutedEventArgs e)
        {
            if (MenuItemsList.SelectedItem is MenuItem selectedItem)
            {
                // Validate inputs
                if (string.IsNullOrWhiteSpace(MenuItemName.Text) || string.IsNullOrWhiteSpace(MenuItemCategory.Text) || string.IsNullOrWhiteSpace(MenuItemPrice.Text))
                {
                    MessageBox.Show("Please fill in all fields.", "Input Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                    return;
                }

                if (!decimal.TryParse(MenuItemPrice.Text, out decimal price))
                {
                    MessageBox.Show("Invalid price. Please enter a numeric value.", "Input Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                    return;
                }

                // Update the selected menu item
                selectedItem.Name = MenuItemName.Text;
                selectedItem.Category = MenuItemCategory.Text;
                selectedItem.Price = price;

                // Refresh the ListView
                MenuItemsList.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Please select a menu item to update.", "Update Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        // Event handler for clearing input fields
        private void ClearMenuItem(object sender, RoutedEventArgs e)
        {
            ClearInputs();
        }

        // Helper method to clear input fields
        private void ClearInputs()
        {
            MenuItemName.Text = string.Empty;
            MenuItemCategory.Text = string.Empty;
            MenuItemPrice.Text = string.Empty;
        }
    }

    // MenuItem class to represent menu items
    public class MenuItem
    {
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
    }
}
