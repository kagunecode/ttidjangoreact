# Generated by Django 5.0.3 on 2024-03-15 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('colour', models.CharField(max_length=30)),
                ('favourite', models.BooleanField(default=False)),
            ],
        ),
    ]
