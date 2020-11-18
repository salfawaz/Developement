package example.abhiandriod.newsapp;


import android.content.DialogInterface;
import android.graphics.Bitmap;
import android.os.Build;
import android.os.Build.VERSION;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebView;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.appcompat.app.AlertDialog;
import androidx.fragment.app.Fragment;

public class Home extends Fragment {
    WebView webview;
    ProgressBar progressBar;
    TextView progress_text;
    LinearLayout progress_layout;
    public Home() {

    }
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View vw = inflater.inflate(R.layout.fragment_home, container, false);




        webview = (WebView) vw.findViewById(R.id.webView);
        webview.setBackgroundColor(0xCC000000);
        webview.setBackgroundResource(R.drawable.initial_background);
        progressBar = (ProgressBar) vw.findViewById(R.id.progressBar);
        progress_text = (TextView) vw.findViewById(R.id.progress_text);
        progress_layout = (LinearLayout) vw.findViewById(R.id.progress_layout);

        webview.getSettings().setJavaScriptEnabled(true);
        webview.getSettings().setLoadWithOverviewMode(true);
        webview.setWebViewClient(new WebViewClient());
        webview.loadUrl("http://s-it-e.com/project/verison2");
        webview.canGoBack();

        return vw;

    }
    public class WebViewClient extends android.webkit.WebViewClient {
        @Override
        public void onPageStarted(WebView view, String url, Bitmap favicon) {
            super.onPageStarted(view, url, favicon);
            progress_layout.setVisibility(View.VISIBLE);
            progress_text.setVisibility(View.VISIBLE);
            progressBar.setVisibility(View.VISIBLE);
        }
        @Override
        public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error){
            if (VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                errorHandle((String)error.getDescription());
            }
            super.onReceivedError(view, request, error);
        }
        @Override
        public void onReceivedHttpError(WebView view, WebResourceRequest request, WebResourceResponse error){
            if (VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                errorHandle(error.getReasonPhrase());
            }
            super.onReceivedHttpError(view, request, error);
        }
        @Override
        public void onPageFinished(WebView view, String url) {
            super.onPageFinished(view, url);
            webview.setBackgroundColor(0xFFFFFFFF);
            progress_layout.setVisibility(View.GONE);
            progress_text.setVisibility(View.GONE);
            progressBar.setVisibility(View.GONE);
        }
        public void errorHandle(String error){
            AlertDialog alertDialog = new AlertDialog.Builder(getActivity())
                    .setIcon(android.R.drawable.ic_dialog_alert)
                    .setTitle("Are you sure to Exit")
                    .setMessage("Your Internet Connection May not be active Or " + error + "Do you go back?")
                    .setPositiveButton("Yes", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialogInterface, int i) {
                            webview.goBack();
                        }
                    })
                    .setNegativeButton("No", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialogInterface, int i) {
                        }
                    })
                    .show();
            webview.setBackgroundColor(0xFFFFFFFF);
        }
    }


}
