using System.Collections.ObjectModel;
using System.Windows;

namespace CoffeeShop
{
    public partial class MenuPage : Window
    {
        public ObservableCollection<MenuItem> MenuItems { get; set; }

        public MenuPage()
        {
            InitializeComponent();

            MenuItems = new ObservableCollection<MenuItem>();
            MenuItemsList.ItemsSource = MenuItems;
        }

        private void AddMenuItem(object sender, RoutedEventArgs e)
        {
            if (string.IsNullOrWhiteSpace(MenuItemName.Text) ||
                string.IsNullOrWhiteSpace(MenuItemCategory.Text) ||
                string.IsNullOrWhiteSpace(MenuItemPrice.Text) ||
                !decimal.TryParse(MenuItemPrice.Text, out decimal price))
            {
                MessageBox.Show("Please provide valid input in all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }

            MenuItems.Add(new MenuItem
            {
                Name = MenuItemName.Text,
                Category = MenuItemCategory.Text,
                Price = price
            });

            ClearInputs();
        }

        private void DeleteMenuItem(object sender, RoutedEventArgs e)
        {
            if (MenuItemsList.SelectedItem is MenuItem selectedItem)
            {
                MenuItems.Remove(selectedItem);
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
                !string.IsNullOrWhiteSpace(MenuItemCategory.Text) &&
                decimal.TryParse(MenuItemPrice.Text, out decimal price))
            {
                selectedItem.Name = MenuItemName.Text;
                selectedItem.Category = MenuItemCategory.Text;
                selectedItem.Price = price;
                MenuItemsList.Items.Refresh();
            }
            else
            {
                MessageBox.Show("Please select an item and provide valid input.", "Error", MessageBoxButton.OK, MessageBoxImage.Warning);
            }
        }

        private void ClearMenuItem(object sender, RoutedEventArgs e) => ClearInputs();

        private void ClearInputs()
        {
            MenuItemName.Text = string.Empty;
            MenuItemCategory.Text = string.Empty;
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
    }

    public class MenuItem
    {
        public string Name { get; set; }
        public string Category { get; set; }
        public decimal Price { get; set; }
    }
}
