   M S B A M L   `   `   `  ����  DesktopApp-Admin    CoffeeShop.SignUp   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Sign Up��5   	   $	��600��6   $	��500��6&    � WindowStartupLocation$ CenterScreen=�5   	    � WindowState$ 	Maximized=�6.    � AllowsTransparency$ False��5   	    � WindowStyle$ SingleBorderWindow=�6$    � 	Resources 5	      3  -System.Windows.Media.Effects.DropShadowEffect   DropShadowEffect   Color   	Direction   
BlurRadius	   ShadowDepth
   Opacity��%b   &	          5
   
   $ Black��64   $	 270Q�6B   $ 15Q�6R   $	 3Q�6b   $	
 0.3Q�6r   5      .��5      � .+�5   
   �� $%��/Assests/background-contact.jpg��6   $
��Fill=�69   �� 5   
   ���	#AA0000006   �� 5   
    �� CornerRadius$ 15��6    �� Padding$ 30q�6#   $��Center=�60   $��Center=�6K   $	��400��5      $	��500��6   ���#ddd$��1q�6=    J� Effect# [  5      ��5      �� 5       �� 
StartPoint$	 0,0&�6&    �� EndPoint$	 1,1&�67   .��5      �  � Color$ 	#FFf5f5f5��6#    � Offset$ 0Q�65   � 5      $ 	#FFe6e6e6��6#   $ 1Q�65   5      ._�5"      �� $��Center=�6   .+�5$      �� $��Create Account��6   $��26(�62   $
��Bold"�6@   $��Center=�6R   ���#333333$��0,0,0,20q�6�   �� 5&      $��Username��6   $��14(�6,   ���#555555$��0,0,0,5q�6O   �� 5'      -   5         ��Name$ UsernameInput��5'      $��35��61   
����������#999999$��1q�6f   $��0,0,0,10q�6z   �� 5)      $��Email��6   $��14(�6)   ���#555555$��0,0,0,5q�6L   �� 5*      -   5        $ 
EmailInput��5*      $��35��6.   
����������#999999$��1q�6c   $��0,0,0,10q�6w   �� 5,      $��Password��6   $��14(�6,   ���#555555$��0,0,0,5q�6O   G� 5-      -   5         G�Name$ PasswordInput��5-      $��35��65   
����������#999999$��1q�6j   $��0,0,0,10q�6~   �� 5/      $��Confirm Password��6   $��14(�64   ���#555555$��0,0,0,5q�6W   G� 50      -   5        $ ConfirmPasswordInput��50      $��35��6<   
����������#999999$��1q�6q   $��0,0,0,20q�6�   �� 52      -   5        $��Sign Up��52      ���	#FFAB8818
�������$��16(�6U   $��SemiBold"�6c   $��45��53       � Cursor$
 Hand��6%   $��Stretch=�54      $��0,5,0,0q�67   �� 56      -   5        $&�� Already have an account? Sign In��56      $��Center=�57      ���#666666$��12(�59      $��	10,15,0,0q�5:      $
 Hand��5;      5<      5=      5>      5?      5@      