package example.abhiandriod.newsapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.viewpager.widget.ViewPager;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import com.google.android.material.navigation.NavigationView;

public class MainActivity extends AppCompatActivity {
    private static final int FRAGMENT_COUNT = 3;
    private static final int HOME_FRAG_NUM = 0;
    private static final int ABOUT_FRAG_NUM = 1;
    private static final int GIVE_FRAG_NUM = 2;
    private boolean DRAWER_OPENED = false;
    DrawerLayout dLayout;
    NavigationView nav_view;
    ViewPager viewPager;
    Toolbar toolbar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        viewPager = findViewById(R.id.viewPager);
        final MyAdapter adapter = new MyAdapter(this,getSupportFragmentManager(), FRAGMENT_COUNT);
        viewPager.setAdapter(adapter);
        drawLayout();
    }
    public void drawLayout(){
        dLayout = (DrawerLayout) findViewById(R.id.drawer_layout);
        nav_view = (NavigationView) findViewById(R.id.nav_view);
        nav_view.setElevation(0f);
        toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        toolbar.setTitle("Menu");
        toolbar.setNavigationIcon(R.drawable.ic_menu_navigation);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, dLayout, toolbar, R.drawable.ic_menu_navigation, R.drawable.ic_menu_navigation) {
            private float scaleFactor = 4f;
            @Override
            public void onDrawerSlide(View drawerView, float slideOffset) {
                super.onDrawerSlide(drawerView, slideOffset);
//                viewPager.setScaleX(1 - (slideOffset / scaleFactor));
//                viewPager.setScaleY(1 - (slideOffset / scaleFactor));
                viewPager.setTranslationX(slideOffset * drawerView.getWidth());
                dLayout.bringChildToFront(drawerView);
                dLayout.requestLayout();
                dLayout.setScrimColor(0xCC101010);
            }
        };
        dLayout.addDrawerListener(toggle);
        nav_view.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            public boolean onNavigationItemSelected(@NonNull MenuItem menuItem){
                switch (menuItem.getItemId()) {
                    case R.id.nav_home:
                        viewPager.setCurrentItem(HOME_FRAG_NUM);
                        dLayout.closeDrawers();
                        return (true);
                    case R.id.nav_about:
                        viewPager.setCurrentItem(ABOUT_FRAG_NUM);
                        dLayout.closeDrawers();
                        return (true);
                    case R.id.nav_give:
                        viewPager.setCurrentItem(GIVE_FRAG_NUM);
                        dLayout.closeDrawers();
                        return (true);
                }
                return false;
            }
        });
    }

}