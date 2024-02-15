import datasets

raw_dataset = datasets.load_dataset("JanosAudran/financial-reports-sec", "small_lite")

print(raw_dataset)