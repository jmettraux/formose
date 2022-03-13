
#
# spec'ing formose.js
#
# Sun Mar 13 19:35:31 JST 2022
#

require 'spec_helpers.rb'


describe 'Formose' do

  #this.render /*(sta, sel, data, form, mode)*/ = render;

  describe '.render' do

    it 'works (sta, data, form, mode)' do

      expect(evaluate(%{
        return Formose.render('#container0', {}, {}, 'view');
      })).to eq(
        :x
      )
    end
  end

  #this.validate /*(data, form)*/ = validate;
  #this.derive /*(sta, sel)*/ = derive;
  #this.read /*(sta, sel)*/ = read;
end

