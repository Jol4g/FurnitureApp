# rn_splash_screen_boilerplate

Splach Screen handled with react-native-splach-screen library and android studio

### Stop wasting time doing splash screen
##      CLONE - MODIFY - CODE - RUN
step 1:
add icon inside 
<code> ./android/app/src/main/res/mipmap/lo.png </code>
#
step 2:
modify xml inside <code>./android/app/src/main/res/layout/launch_screen.xml </code>
```sh
  <?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="@color/blue" // change bg color
    android:layout_gravity="center"
    >
    <ImageView
        android:layout_width="320dp"
        android:layout_height="488dp"
        android:layout_gravity="center"
        android:layout_marginTop="0dp"
        android:src="@mipmap/lo" />   // change logo name without .png


</LinearLayout>
```
