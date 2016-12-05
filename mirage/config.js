export default function() {
  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: false
    };
  }
}
