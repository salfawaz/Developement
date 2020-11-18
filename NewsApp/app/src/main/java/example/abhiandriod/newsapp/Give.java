package example.abhiandriod.newsapp;

import android.graphics.Bitmap;
import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;

public class Give extends Fragment {
    WebView give_webView;

    public Give() {

    }
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View give_vw = inflater.inflate(R.layout.fragment_give, container, false);

        give_webView = (WebView) give_vw.findViewById(R.id.give_webView);
        give_webView.setBackgroundColor(0xEE000000);

        give_webView.getSettings().setJavaScriptEnabled(true);
        give_webView.getSettings().setLoadWithOverviewMode(true);
        give_webView.setWebViewClient(new Give.GiveWebViewClient());
        give_webView.loadUrl("https://www.cbn.com/giving/700club/contribute.aspx");

        return give_vw;

    }
    public class GiveWebViewClient extends android.webkit.WebViewClient {

        public GiveWebViewClient(){

        }
        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {

            super.onPageStarted(view, url, favicon);
        }
        @RequiresApi(api = Build.VERSION_CODES.M)
        @Override
        public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error){
            //Your code to do
            Toast.makeText(getActivity(), "Your Internet Connection May not be active Or " + error.getDescription(), Toast.LENGTH_LONG).show();
        }
        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
        }
    }
}
