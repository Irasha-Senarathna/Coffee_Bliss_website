   M S B A M L   `   `   `  ����  DesktopApp-Admin'    !CoffeeShop.CustomerManagementPage   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Manage Customers��5   	   $	��800��6"   $
��1200��6/    � WindowStartupLocation$ CenterScreen=�5   	    � WindowState$ 	Maximized=�6.   ��5      �� 5   
    �� ImageSource$% /Assests/vanilla_cappuccino.jpg��6   .��5      � $��20q�6    � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   .+�5   
   �� ���	#3EF3F2F0$��10q�6(    �� CornerRadius$ 10��64   ._�5      �� $��Center=�6   $��Center=�64   $��10q�6Q   .+�5      �� $��Manage Customers��6   $��36(�64   $
��Bold"�6B   
���   �$��Center=�6g   5      5      � 5   
   $	��220��6   $
��Left=�6   $	��Top=�66   $��	10,20,0,0q�6N   $��1��6a   .+�5      �� ���#3E2723$	��Top=�6.   $��10q�6F   .+�5      �� $��☕ Coffee_Bliss��6   
�������$��18(�6E   $
��Bold"�6S   $��Center=�6e   $��10q�6�   �� 5      -   5        $��	Dashboard��5      $��Stretch=�6-   $��50��6K   $��5q�6s   ���#3E2723
�������$��16(�6�   �� 5      -   5        $��Manage Menu��5      $��Stretch=�6/   $��61��6M   $��5,-4,5,5q�6z   ���#3E2723
�������$��16(�6�   �� 5      -   5        $��Manage Orders��5      $��Stretch=�61   $��50��6O   $��5q�6}   ���#3E2723
�������$��16(�6�   �� 5       -   5        $��Manage Customers��5       $��Stretch=�64   $��50��6R   $��5q�6�   ���#3E2723
�������$��16(�6�   �� 5!      -   5        $��Logout��5!      $��Stretch=�6*   $��50��6H   $��5q�6c   ���#D32F2F
�������$��16(�6�   5"      5#      � 5&   
   $��240,20,10,10q�6   $��1��6%   .+�5'      �� $��10q�6   .+�5)      �� $��Customer List��6   $��18(�61   $
��Bold"�6?   
�������$��0,0,0,10q�6d   $��37��6v   $	��615��6�   �� 5*      -   5         ��Name$ CustomerListView��5*      $	��300��65   ���#ffffff���#3E2723$��1q�6m   $	��612��6�    �� View 5+      �� 5,      .P�5-      �� $��Customer Name��6-    �� Width$	 200��6D   	 �� DisplayMemberBinding	 6P   �� *Name+�� 5.      $��Email��6-   $	 250��6<   	 6H   �� *Email+�� 5/      $��Contact Number��6-   $	 150��6E   	 6Q   �� *ContactNumber+50      52      �� 55      ���	#3E080807$��10q�60   $ 10��6<   ._�56      �� $��Center=�6!   $��Center=�6<   $	��114��6Y   $	��870��6f   ��57      �� 58      
 �� EndPoint$
 0.5,1&�62    �� 
StartPoint$ 0.5,0&�6C   .��59   "   �  � Color$ Black��6/   � 5:   "   $ 	#FFF7C7B0��6/    � Offset$ 1Q�6A   5;      .+�5=      �� $��Manage Customer��6$   $��18(�6;   $
��Bold"�6I   
�������$��	0,20,0,10q�6n   �� 5>       �� Orientation$ 
Horizontal=�6%   $��0,0,0,10q�6>   .+�5?      �� $��Name:��6(   
���   �$��0,0,10,0q�6H   $��16(�6Z   $
��Bold"�6h   �� 5@      -   5         ��Name$ CustomerNameInput��5@   &   $	��200��6A   $��30��6M   $��0,0,20,0q�6Y   $��Enter Customer Name��6�   �� 5A      $��Email:��6(   
���   �$��0,0,10,0q�6I   $��16(�6[   $
��Bold"�6i   �� 5B      -   5        $ CustomerEmailInput��5B   &   $	��200��6B   $��30��6N   $��0,0,20,0q�6Z   $��Enter Email��6�   �� 5C      $��Contact Number:��6(   
���   �$��0,0,10,0q�6R   $��16(�6d   $
��Bold"�6r   �� 5D      -	   5        $ CustomerContactInput��5D   &   $	��150��6D   $��30��6P   5E      5F      5G      �� 5I      $ 
Horizontal=�6   $��0,0,0,20q�66   .+�5J      �� -
   5        $��Add Customer��5J      $	��150��64   $��30��6@   ���#3E2723
�������$��14(�6t   6�   �� 5K      -   5        $��Edit Customer��5K      $	��150��65   $��30��6A   $��10,0,0,0q�6M   ���#3E2723
�������$��14(�6�   6�   �� 5L      -   5        $��Delete Customer��5L      $	��150��67   $��30��6C   $��10,0,0,0q�6O   ���#3E2723
�������$��14(�6�   6�   5M      5N      5O      5P      5Q      