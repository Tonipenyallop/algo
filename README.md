# flow

1. install django

```
pipenv install django
```

2. start shell

```
pipenv shell
```

if you want to exit shell

```
exit
```

3. start project(don't forget **comma** at the end as well as adding to name of app to project)

```
django-admin startproject EXAMPLE_project .
```

4. Start app

```
python manage.py startapp NAME_OF_APP
```

5. run server

```
python manage.py runserver
```

**Now ready to go👍**

# Etc.

update migration

```
python manage.py makemigrations
```

run migration

```
python manage.py migrate APP_NAME
```

create superuser

```
python manage.py createsuperuser
```

# How to connect Django with Postgres?

click here[https://dev.to/dennisivy11/easiest-django-postgres-connection-ever-with-railway-11h6]
