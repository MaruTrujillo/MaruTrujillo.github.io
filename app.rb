require 'sinatra'
require 'json'

get '/' do
  erb :index
end

# In-memory storage for chicken results
chicken_results = {}

# Define a route to handle the form submission
post '/calculateMorning' do
  # Retrieve form data
  morning_spicy_input1 = params[:morning_spicy_input1].to_i
  morning_spicy_input2 = params[:morning_spicy_input2].to_i
  morning_spicy_input3 = params[:morning_spicy_input3].to_i

  # Perform calculation
  result = morning_spicy_input1 * 100 + morning_spicy_input2 * 10 + morning_spicy_input3

  # Save the result for the chicken type
  chicken_results[:morning_spicy] = result

  # Return the result
  result.to_s
end

# Define a route to retrieve the saved chicken results
get '/chickenResults' do
  chicken_results.to_json
end

# Run the Sinatra application
Sinatra::Application.run!
