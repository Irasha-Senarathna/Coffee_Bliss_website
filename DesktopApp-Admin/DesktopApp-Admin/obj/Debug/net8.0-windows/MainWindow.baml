   M S B A M L   `   `   `  ����  DesktopApp-Admin    CoffeeShop.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$!  Coffee Shop Admin Dashboard��5   	   $	��800��6-   $
��1200��6:    � WindowStartupLocation$ CenterScreen=�5   	    � WindowState$ 	Maximized=�6.   ��5      �� 5	   
    �� ImageSource$% /Assests/background-contact.jpg��6   .��5      �  � ColumnDefinitions 5   
   �� 5      $	��200 �6   �� 5      $��* �6   .+�5   
   �� ���#3E2723$��Stretch=�6*   .+�5      �� $��☕ Coffee_Bliss��6   
�������$��18(�6A   $
��Bold"�6O   $��Center=�6a   $��10q�6~   �� 5      -   5        $��	Dashboard��5      $��40��6)   ���#5D4037
�������$��5q�6]   6h   �� 5      -   5        $��Manage Menu��5      $��40��6+   ���#5D4037
�������$��5q�6_   6j   �� 5      -   5        $��Manage Orders��5      $��40��6-   ���#5D4037
�������$��5q�6a   6l   �� 5      -   5        $��Manage Customers��5      $��40��60   ���#5D4037
�������$��5q�6d   6o   �� 5      -   5        $��Logout��5      $��40��6&   ���#D32F2F
�������$��5q�6Z   6e   5      � 5   
   $��1��6   .+�5      �  � RowDefinitions 5       �� 5!      $
��Auto �6$   �� 5"      $��* �6$   .+�5&      ]� ���#795548$��50��61   $	��Top=�6=   .+�5'      �� $��Welcome, Irasha!��6    $��18(�68   
�������$��10q�6Y   $��Center=�6e   �� 5(      -   5        $��txtDateTime��5(       $��01-Mar-2025 10:30 AM��63   
�������$��14(�6b   $��Center=�6p   $��Right=�6�   $��0,0,10,0q�6�   5)      �� 5,      $��1��6   $��Center=�6&   $��Center=�6A   ���	#AAFFFFFF
���   �$��2q�5-   	    �� Padding$ 30q�6    �� CornerRadius$ 10��6*   $	��400��6<   ._�5.      �� $��Center=�6!   $��Center=�6<   .+�5/      �� $��Coffee Shop Dashboard��6$   $��22(�6A   $
��Bold"�6O   ���#3E2723$��Center=�6v   $��0,0,0,20q�6�   �� 52       �� Orientation$ Vertical=�6%   $��Center=�6<   $��10q�6Y   .+�54      �� $	��300��6%   $��80��61   $��5q�6=   $ 8��6H   ��55   "   �� 56   &   	 �� EndPoint$	 0.5,1&�6:   
 �� 
StartPoint$
 0.5,0&�6K   .��57   *   �  � Color$ 	#FFF7C7B0��67    � Offset$ 0Q�6I   � 59   *   $ #4E342E��67   $ 1Q�6G   5;   '   ._�5=   "   �� $��Center=�6-   $��Center=�6J   .+�5>   &   �� $��Total Orders��60   $��14(�6D   ���#3E27236R   �� 5?   &   $��45��60   $��24(�6:   $
��Bold"�6H   ���#3E27236Z   5@   #   5A      �� 5D      $	��300��6%   $��80��61   $��5q�6=   $ 8��6H   ��5E   "   �� 5F   &   $	 0.5,1&�6:   $
 0.5,0&�6K   .��5G   *   � $ 	#FFF7C7B0��67   $ 0Q�6I   � 5I   *   $ #4E342E��67   $ 1Q�6G   5K   '   ._�5M   "   �� $��Center=�6-   $��Center=�6J   .+�5N   &   �� $��Total Revenue (LKR)��60   $��14(�6K   ���#3E27236Y   �� 5O   &   $��120,000��60   $��24(�6?   $
��Bold"�6M   ���#3E27236_   5P   #   5Q      �� 5T      $	��300��6%   $��80��61   $��5q�6=   $ 8��6H   ��5U   "   �� 5V   &   $	 0.5,1&�6:   $
 0.5,0&�6K   .��5W   *   � $ 	#FFF7C7B0��67   $ 0Q�6I   � 5Y   *   $ #4E342E��67   $ 1Q�6G   5[   '   ._�5]   "   �� $��Center=�6-   $��Center=�6J   .+�5^   &   �� $��Total Customers��60   $��14(�6G   ���#3E27236U   �� 5_   &   $��89��60   $��24(�6:   $
��Bold"�6H   ���#3E27236Z   5`   #   5a      5b      �� 5e      ���#FFFDE7$��5q�66   $ 10q�6A   $ 8��6N   ._�5f      �� .+�5g   "   �� $��Notifications��6,   $��16(�6A   $
��Bold"�6O   $��5q�6a   �� 5h   "   .@�5i   &   �� $��⚠️ 3 Pending Orders��62   �� 5j   &   $"��🎉 Best Seller: Cappuccino��62   �� 5k   &   $��🆕 New Customer: Dinu��62   5l   #   5m      5n      5o      5p      5q      5r      5s      5t      