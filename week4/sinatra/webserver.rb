
require 'socket'

server = TCPServer.open( 2000 )    # create a socket on port 2000

loop do

  puts "Waiting for request..."

  client_connection = server.accept() # start listening for a new connection request
  puts "Got connection!"

  request = client_connection.recv( 1024 )
  puts "Got request:", request

  parts = request.split ' '
  p parts

  path = parts[ 1 ]

  if path == '/'
    message = "Welcome!"
  elsif path == '/secretfiles'
    message = "Evil Haxor! U cannot have my seekrit filez!!!!1"
  else
    message = 'Hi'
  end


  response = "HTTP/1.1 200 OK

  <html>
    <head>
    <style>
    body{
      background-color: hotpink;
    }
    </style>
    </head>
    <body>
    <h1>It works!</h1>
    <h2>#{ message }</h2>
    <p>You just made a webserver.</p>
    Your random number is: #{ Random.rand }
    </body>
  </html>"


  client_connection.write( response )
  client_connection.close

end
