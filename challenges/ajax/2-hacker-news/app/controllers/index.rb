get '/' do
  redirect '/posts'
end

get '/posts' do
  @posts = Post.all
  erb :index
end

get '/posts/:id/vote' do
  post = Post.find(params[:id])
  post.votes.create(value: 1)
  content_type :json
  {votes: post.points}.to_json
  
end

delete '/posts/:id' do
  # Implementar la logica de esta ruta.
  post = Post.find_by(id: params[:id])
  post.delete
  content_type :json
  {id: post.id, title: post.title, votes: post.points}.to_json
end

post '/posts' do
  post = Post.new( title: params[:title],
               username: Faker::Internet.user_name,
               comment_count: rand(1000) )
  if post.save
    p "*"*30
    erb :"_post", layout: false, locals: {post: post}
  else
    p "X"*30
    error_msg = post.errors.full_messages
    p error_msg
    status 400
    content_type :json
    {msg: error_msg}.to_json
  end

  
  # redirect '/posts'
end

get '/post/:id' do
  @post = Post.find(params[:id])
  erb :post
end
