enable :sessions 

get '/' do
  @shortened_url = Url.all
  @error = session[:error]
  erb :"static/index"
end

# post '/add_url' do 
# 	url = Url.new(long_url: params[:long_url])
# 	url.shorten 
# 	if url.save
#     session[:error] = nil 
#     redirect '/'
#   else 
#     session[:error] = url.errors.full_messages
#     redirect '/'
#   end
# end 

get '/:short_url' do 
  click_url = Url.all.find_by(short_url: params[:short_url])
  count = click_url.click + 1 
  click_url.update_attributes(:click => count)
  redirect click_url.long_url

end 

post '/add_url' do
  @url = Url.new(long_url: params[:long_url])
  @url.shorten 
  if @url.save
    return @url.to_json
  else
    return @url.errors.full_messages.join('. ')
  end
end

