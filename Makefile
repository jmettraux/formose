
RUBY:=ruby
#RUBY:=$(shell find ~/.rubies -maxdepth 1 | grep "ruby-2" | head -1)/bin/ruby

N:=h
LICENSE:=https://github.com/jmettraux/$(N).js/LICENSE.txt

VERSION:=$(shell grep VERSION src/$(N).js | $(RUBY) -e "puts gets.match(/VERSION = '([\d\.]+)/)[1]")

#SHA:=$(shell git log -1 --format="%H")
SHA:=$(shell git log -1 --format="%h")
NOW:=$(shell date)


v:
	@echo $(VERSION)

spec:
	bundle exec rspec

pkg_plain:
	mkdir -p pkg
	cp src/$(N).js pkg/$(N)-$(VERSION).js
	echo "/* from commit $(SHA) on $(NOW) */" >> pkg/$(N)-$(VERSION).js
	cp pkg/$(N)-$(VERSION).js pkg/$(N)-$(VERSION)-$(SHA).js

pkg_mini:
	mkdir -p pkg
	printf "/* $(N)-$(VERSION).min.js | MIT license: $(LICENSE) */" > pkg/$(N)-$(VERSION).min.js
	java -jar tools/closure-compiler.jar --js src/$(N).js >> pkg/$(N)-$(VERSION).min.js
	echo "/* minified from commit $(SHA) on $(NOW) */" >> pkg/$(N)-$(VERSION).min.js
	cp pkg/$(N)-$(VERSION).min.js pkg/$(N)-$(VERSION)-$(SHA).min.js

pkg_comp:
	mkdir -p pkg
	printf "/* $(N)-$(VERSION).com.js | MIT $(LICENSE) */\n" > pkg/$(N)-$(VERSION).com.js
	cat src/$(N).js | $(RUBY) tools/compactor.rb >> pkg/$(N)-$(VERSION).com.js
	echo "/* compacted from commit $(SHA) on $(NOW) */" >> pkg/$(N)-$(VERSION).com.js
	cp pkg/$(N)-$(VERSION).com.js pkg/$(N)-$(VERSION)-$(SHA).com.js

pkg: pkg_plain pkg_mini pkg_comp
#pkg: pkg_plain pkg_comp

clean-sha:
	find pkg -name "$(N)-*-*js" | xargs rm
clean:
	rm -fR pkg/

serve: # just for spec/test.html
	@echo "##"
	@echo "## head for http://localhost:7001/spec/test.html"
	@echo "##"
	$(RUBY) -run -ehttpd . -p7002
s: serve


.PHONY: spec pkg clean serve

