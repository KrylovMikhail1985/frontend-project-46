install: install-deps
	npx simple-git-hooks
#
#run:
#	bin/nodejs-package.js 10
#
run:
	node gendiff.js ./files/file1.json ./files/file2.json

install-deps:
	npm ci

lint:
	npx eslint .

test:
	npx jest

test-coverage:
	npx jest --coverage
#
#test-coverage:
#	npm test -- --coverage --coverageProvider=v8
#
#
#publish:
#	npm publish
#
#.PHONY: test