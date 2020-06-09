## React-Native App similar to Doordash ##
# app for food delivery #
error : Could not find method implementation() for arguments react native maps....

See what happens if you revert those changes yourself. You can do this by navigating to node_modules/react-native-maps/lib/android/build.gradle and changing

these lines

  compileOnly "com.facebook.react:react-native:+"
  implementation "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
  implementation "com.google.android.gms:play-services-maps:$googlePlayServicesVersion"
  implementation "com.google.maps.android:android-maps-utils:$androidMapsUtilsVersion"
to

  provided "com.facebook.react:react-native:+"
  compile "com.google.android.gms:play-services-base:$googlePlayServicesVersion"
  compile "com.google.android.gms:play-services-maps:$googlePlayServicesVersion"
  compile "com.google.maps.android:android-maps-utils:$androidMapsUtilsVersion"
and see if the project builds.
