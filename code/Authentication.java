public class Authentication extends Resource {
	public void startSession(StartSessionListener listener, ...) {
		StartSession task = new StartSession(listener, ...);
		task.execute();
	}
class StartSession extends AsyncTask<String, Void, String> {
	private StartSessionListener listener; ...
	StartSession(StartSessionListener listener, ...) {
		super ();
		this.listener = listener; ...
	}
	@Override
	protected String doInBackground(String... params) {
		String sessionkey = null;
		try {
			String httprequest = ForumAPI.BASE_URL
				+ "authentication_startsession/"
				+ ...
			
			HttpGet httpGET = new HttpGet(httprequest);
			HttpResponse response = getHttpClient()
				.execute(httpGET, getHttpContext());
			sessionkey = EntityUtils
				.toString(response.getEntity());
		} catch (IOException e) {
			...
		}
		return sessionkey;
	}
	@Override
	protected void onPostExecute(String key) {
		super.onPostExecute(key);
		if(this.listener != null)
			this.listener.handleStartSession (key);
	}
}
}