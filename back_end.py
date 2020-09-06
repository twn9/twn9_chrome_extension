import csv

#writing
with open('data.csv', 'w', newline='') as csvfile:
    header = ['url']
    sample = ['google.com']
    writer = csv.writer(csvfile)
    writer.writerow(header)
    writer.writerow(sample)


def add_url(url):
    with open('data.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(url)

# def remove_url(url):


# reading
with open('data.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for i in reader:
        print(i)
