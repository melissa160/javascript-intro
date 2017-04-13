# index
get '/' do
  redirect '/todos'
end

get '/todos' do
  @all_todos = Todo.all
  erb :index
end

#create
post '/todos' do
  # p '*'*50
  todo = Todo.new(todo_content: params[:content])
  if todo.save
    # erb :"_todo", layout: false, locals: {todo: todo}
    content_type :json
    {id: todo.id, todo_content: todo.todo_content }.to_json
  else

  end
end

#new

#show

#edit
get "/todos/:id/edit" do
  @todo = Todo.find_by(id: params[:id]) 
  erb :edit
end

#update
patch "/todos/:id" do
  p '*'*50
  p "en patch"
  todo = Todo.find_by(id: params[:id])
  todo.update(todo_content: params[:content])
  redirect "/todos"
end


#delete
delete "/todos/:id" do
  p '*'*50
  p "en delete"
  todo = Todo.find_by(id: params[:id])
  todo.delete
  content_type :json
  {id: todo.id}.to_json
end

get '/todos/:id' do
  todos = Todos.find(params[:id])
  erb :"_todo", layout: false, locals: {todo: todo}
end