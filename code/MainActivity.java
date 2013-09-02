public class MainActivity extends Activity
	implements StartSessionListener
{
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		new ForumAPI().authentication()
			.startSession(this, -1, "joris", "joris");
	}
	@Override
	public void handleStartSession(String key) {
		// do something ...
	}
}