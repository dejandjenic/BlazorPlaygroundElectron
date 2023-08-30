FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
	
WORKDIR /src



COPY ["BlazorPlayground.csproj", "BlazorPlayground.csproj"]

RUN dotnet restore "BlazorPlayground.csproj"



COPY ["/", "/"]
RUN sed -i 's/<base href="\/"/<base href="\/BlazorPlayground\/"/g' release/wwwroot/index.html >> release/wwwroot/index.html

RUN dotnet build "BlazorPlayground.csproj" --no-restore -c Release -o /app



FROM build AS publish
RUN dotnet publish "BlazorPlayground.csproj" --no-restore -c Release -o /app




FROM nginx:alpine AS final
WORKDIR /usr/share/nginx/html

COPY --from=publish /app/wwwroot .
COPY ["nginx.conf", "/etc/nginx/nginx.conf"]
