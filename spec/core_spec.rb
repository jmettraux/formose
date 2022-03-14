
#
# spec'ing formose.js
#
# Sun Mar 13 19:35:31 JST 2022
#

require 'spec_helpers.rb'


describe 'Formose' do

  before :each do

    reset_dom
  end

    # this.render /*(sta, sel, data, form, mode)*/ = render;
    #
  describe '.render' do

    it 'works (sta, data, form, mode)' do

      expect(evaluate(%{
        Formose.render('#container0', {}, {}, 'view');
        return H.elt('#container0').outerHTML;
      })).to eqh(%{
        <div id="container0"></div>
      })
    end
  end

    # this.read /*(sta, sel)*/ = read;
    #
  describe '.read' do

    it 'works (sta)' do

      expect(evaluate(%{
        return Formose.read('.form-f');
      })).to eq({
        'name' => 'Captain Harlock',
        'birth' => '1977-12-31',
      })
    end
  end


  #this.validate /*(data, form)*/ = validate;
  #this.derive /*(sta, sel)*/ = derive;
end

