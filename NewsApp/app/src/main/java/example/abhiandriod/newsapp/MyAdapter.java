package example.abhiandriod.newsapp;

import android.content.Context;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;

class MyAdapter extends FragmentPagerAdapter {
    Context context;
    int totalFrag;
    public MyAdapter(Context c, FragmentManager fm, int totalFrag) {
        super(fm);
        context = c;
        this.totalFrag = totalFrag;
    }
    @Override
    public Fragment getItem(int position) {
        switch (position) {
            case 0:
                Home frag_home = new Home();
                return frag_home;
            case 1:
                AboutUs frag_about = new AboutUs();
                return frag_about;
            case 2:
                Give frag_give = new Give();
                return frag_give;
            default:
                return null;
        }
    }
    @Override
    public int getCount() {
        return totalFrag;
    }
}
